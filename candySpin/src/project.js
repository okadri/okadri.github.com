require=function e(r,t,n){function i(a,c){if(!t[a]){if(!r[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(o)return o(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var u=t[a]={exports:{}};r[a][0].call(u.exports,function(e){var t=r[a][1][e];return i(t?t:e)},u,u.exports,e,r,t,n)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({game:[function(e,r,t){"use strict";cc._RF.push(r,"280c3rsZJJKnZ9RqbALVwtK","game"),cc.Class({"extends":cc.Component,properties:{apinAudio:{"default":null,url:cc.AudioClip}},onLoad:function(){var e=this;e.spriteNode1=new cc.Node("New Sprite"),e.sprite1=e.spriteNode1.addComponent(cc.Sprite),e.spriteNode1.parent=e.node,e.spriteNode2=new cc.Node("New Sprite"),e.sprite2=e.spriteNode2.addComponent(cc.Sprite),e.spriteNode2.parent=e.node,cc.eventManager.addListener({event:cc.EventListener.TOUCH_ONE_BY_ONE,onTouchBegan:function(e,r){return!0},onTouchMoved:function(e,r){return!0},onTouchEnded:function(r,t){return e.spin(),!0}},e.node)},spin:function(){var e=this,r=.2,t=20,n={IMAGE:{MAX_COUNT:1,GROUP_NAME:"images"},COLOR:{MAX_COUNT:2,GROUP_NAME:"colors"}},i={colors:["blue","green","purple","red","yellow","orange"],images:["cupcake","peanut","lolly","mint"]};cc.audioEngine.playEffect(this.apinAudio,!1);var o=t,a=setInterval(function(){var t=Math.random()<r?n.IMAGE:n.COLOR,c=Math.floor(Math.random()*i[t.GROUP_NAME].length),s=cc.url.raw("Texture/"+i[t.GROUP_NAME][c]+".png");e.setImage(s,t.MAX_COUNT),0===--o&&window.clearInterval(a)},50)},setImage:function(e,r){var t=this,n=r;if(n>1)var n=Math.floor(Math.random()*n);if(1==n){t.sprite2.setVisible(!1),t.spriteNode1.setPositionX(0);var i=cc.textureCache.addImage(e);t.sprite1.spriteFrame=new cc.SpriteFrame(i)}else{t.sprite2.setVisible(!0),t.spriteNode1.setPositionX(-200),t.spriteNode2.setPositionX(200);var i=cc.textureCache.addImage(e);t.sprite1.spriteFrame=new cc.SpriteFrame(i);var i=cc.textureCache.addImage(e);t.sprite2.spriteFrame=new cc.SpriteFrame(i)}}}),cc._RF.pop()},{}]},{},["game"]);