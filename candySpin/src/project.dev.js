require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"game":[function(require,module,exports){
"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'game');
// Script/game.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        apinAudio: {
            default: null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;

        self.spriteNode1 = new cc.Node("New Sprite");
        self.sprite1 = self.spriteNode1.addComponent(cc.Sprite);
        self.spriteNode1.parent = self.node;

        self.spriteNode2 = new cc.Node("New Sprite");
        self.sprite2 = self.spriteNode2.addComponent(cc.Sprite);
        self.spriteNode2.parent = self.node;

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                return true;
            },
            onTouchMoved: function onTouchMoved(touch, event) {
                return true;
            },
            onTouchEnded: function onTouchEnded(touch, event) {
                self.spin();
                return true;
            }
        }, self.node);
    },

    spin: function spin() {
        var self = this;

        var IMAGE_COLOR_RATIO = 0.2;
        var SHUFFLE_TIMES = 20;
        var TYPES = {
            IMAGE: { MAX_COUNT: 1, GROUP_NAME: "images" },
            COLOR: { MAX_COUNT: 2, GROUP_NAME: "colors" }
        };

        var images = {
            colors: ["blue", "green", "purple", "red", "yellow", "orange"],
            images: ["cupcake", "peanut", "lolly", "mint"]
        };

        cc.audioEngine.playEffect(this.apinAudio, false);
        var x = SHUFFLE_TIMES;
        var intervalID = setInterval(function () {

            var randType = Math.random() < IMAGE_COLOR_RATIO ? TYPES.IMAGE : TYPES.COLOR;
            var random = Math.floor(Math.random() * images[randType.GROUP_NAME].length);
            var url = cc.url.raw("Texture/" + images[randType.GROUP_NAME][random] + ".png");
            self.setImage(url, randType.MAX_COUNT);

            if (--x === 0) {
                window.clearInterval(intervalID);
            }
        }, 50);
    },

    setImage: function setImage(url, maxCount) {
        var self = this;

        var count = maxCount;
        if (count > 1) {
            var count = Math.floor(Math.random() * count);
        }

        if (count == 1) {
            // Hide the other sprite
            self.sprite2.setVisible(false);

            self.spriteNode1.setPositionX(0);
            var texture = cc.textureCache.addImage(url);
            self.sprite1.spriteFrame = new cc.SpriteFrame(texture);
        } else {
            self.sprite2.setVisible(true);
            self.spriteNode1.setPositionX(-200);
            self.spriteNode2.setPositionX(200);
            var texture = cc.textureCache.addImage(url);
            self.sprite1.spriteFrame = new cc.SpriteFrame(texture);
            var texture = cc.textureCache.addImage(url);
            self.sprite2.spriteFrame = new cc.SpriteFrame(texture);
        }
    }
});

cc._RF.pop();
},{}]},{},["game"]);
