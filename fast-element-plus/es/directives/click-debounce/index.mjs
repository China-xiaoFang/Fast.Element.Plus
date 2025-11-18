import{withInstallDirective as _}from"@fast-china/utils";const e=_({created(_,e,o){_.__debounce_originClick__=o.props.onClick,o.props.onClick=()=>{_.__debounce_timer__&&clearInterval(_.__debounce_timer__),_.__debounce_timer__=setTimeout(()=>{_.__debounce_originClick__()},500)}}},"debounce");export{e as default,e as vDebounce};
//# sourceMappingURL=index.mjs.map
