typeof ue !== 'object' || typeof ue.interface !== 'object' ? (typeof ue !== 'object' && (ue = {}), ue.interface = {}, ue.interface.broadcast = function(e, t) {
  if (typeof e === 'string') {
    var o = [e, '']
    void 0 !== t && (o[1] = t)
    var n = encodeURIComponent(JSON.stringify(o))
    typeof history === 'object' && typeof history.pushState === 'function' ? (history.pushState({}, '', '#' + n), history.pushState({}, '', '#' + encodeURIComponent('[]'))) : (document.location.hash = n, document.location.hash = encodeURIComponent('[]'))
  }
}) : (function(e) {
  ue.interface = {}, ue.interface.broadcast = function(t, o) {
    typeof t === 'string' && (void 0 !== o ? e.broadcast(t, JSON.stringify(o)) : e.broadcast(t, ''))
  }
}(ue.interface)), (window.ue4 = ue.interface.broadcast)
window.ue = ue
