import raf from "./raf";
import TransitionEvents from "css-animation/lib/Event";
let styleForPesudo;

// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
  if (process.env.NODE_ENV === "test") {
    return false;
  }
  return !element || element.offsetParent === null;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  const match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
export default function(node, { insertExtraNode, csp }) {
  // the node has been mounted in the DOM
  let extraNode;

  let clickWaveTimeoutId;

  let animationStartId;

  let animationStart = false;

  let destroyed = false;

  if (!node || node.nodeType !== 1) {
    return;
  }
  let instance = bindAnimationEvent(node);

  function onClick(node, waveColor) {
    if (!node || isHidden(node) || node.className.indexOf("-leave") >= 0) {
      return;
    }
    extraNode = document.createElement("div");
    extraNode.className = "ant-click-animating-node";
    const attributeName = getAttributeName();
    node.setAttribute(attributeName, "true");
    // Not white or transparnt or grey
    styleForPesudo = styleForPesudo || document.createElement("style");
    if (
      waveColor &&
      waveColor !== "#ffffff" &&
      waveColor !== "rgb(255, 255, 255)" &&
      isNotGrey(waveColor) &&
      !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== "transparent"
    ) {
      // Add nonce if CSP exist
      if (csp && csp.nonce) {
        styleForPesudo.nonce = csp.nonce;
      }

      extraNode.style.borderColor = waveColor;
      styleForPesudo.innerHTML = `
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${waveColor};
      }`;
      if (!document.body.contains(styleForPesudo)) {
        document.body.appendChild(styleForPesudo);
      }
    }
    if (insertExtraNode) {
      node.appendChild(extraNode);
    }
    TransitionEvents.addStartEventListener(node, onTransitionStart);
    TransitionEvents.addEndEventListener(node, onTransitionEnd);
  }

  function bindAnimationEvent(node) {
    if (
      !node ||
      !node.getAttribute ||
      node.getAttribute("disabled") ||
      node.className.indexOf("disabled") >= 0
    ) {
      return;
    }
    const _onClick = e => {
      // Fix radio button click twice
      if (e.target.tagName === "INPUT" || isHidden(e.target)) {
        return;
      }
      resetEffect(node);
      // Get wave color from target
      const waveColor =
        getComputedStyle(node).getPropertyValue("border-top-color") || // Firefox Compatible
        getComputedStyle(node).getPropertyValue("border-color") ||
        getComputedStyle(node).getPropertyValue("background-color");
      clickWaveTimeoutId = window.setTimeout(() => onClick(node, waveColor), 0);

      raf.cancel(animationStartId);
      animationStart = true;

      // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset
      animationStartId = raf(() => {
        animationStart = false;
      }, 10);
    };
    node.addEventListener("click", _onClick, true);
    return {
      cancel: () => {
        node.removeEventListener("click", _onClick, true);
      }
    };
  }
  function resetEffect(node) {
    if (!node || node === extraNode || !(node instanceof Element)) {
      return;
    }
    const attributeName = getAttributeName();
    node.setAttribute(attributeName, "false"); // edge has bug on `removeAttribute` #14466

    if (styleForPesudo) {
      styleForPesudo.innerHTML = "";
    }

    if (insertExtraNode && extraNode && node.contains(extraNode)) {
      node.removeChild(extraNode);
    }
    TransitionEvents.removeStartEventListener(node, onTransitionStart);
    TransitionEvents.removeEndEventListener(node, onTransitionEnd);
  }

  function onTransitionStart(e) {
    if (destroyed) {
      return;
    }
    if (!e || e.target !== node || animationStart) {
      return;
    }
    resetEffect(node);
  }

  function onTransitionEnd(e) {
    if (!e || e.animationName !== "fadeEffect") {
      return;
    }
    resetEffect(e.target);
  }

  function getAttributeName() {
    return insertExtraNode
      ? "ant-click-animating"
      : "ant-click-animating-without-extra-node";
  }
  return {
    destroy() {
      if (instance) {
        instance.cancel();
      }
      if (clickWaveTimeoutId) {
        clearTimeout(clickWaveTimeoutId);
      }

      destroyed = true;
    }
  };
}
