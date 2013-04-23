
exports.remove = function(){
  // first provide space to undo stuff
  // before it gets removed.
  this.constructor.remove(this);
  // then remove the dom element.
  if (this.elem) this.elem.remove();
  return this;
}