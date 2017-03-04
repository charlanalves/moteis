/**
 * @version $Id: djmobilemenu.js 42 2015-08-12 12:28:01Z szymon $
 * @package DJ-MegaMenu
 * @copyright Copyright (C) 2013 DJ-Extensions.com, All rights reserved.
 * @license DJ-Extensions.com Proprietary Use License
 * @author url: http://dj-extensions.com
 * @author email contact@dj-extensions.com
 * @developer Szymon Woronowski - szymon.woronowski@design-joomla.eu
 */
(function($){var k=function(a,b){var c=new Element('select',{id:a.get('id')+'select','class':'inputbox dj-select',events:{change:function(){if(this.get('value'))window.location=this.get('value')}}});var d=a.getChildren('li.dj-up');l(d,c,0);c.inject(b)};var l=function(f,g,h){var j='',active=false;for(var i=0;i<h;i++){j+='- '}f.each(function(a){var b=a.getElement('> a');var c=a.getChildren('> .dj-subwrap > .dj-subwrap-in > .dj-subcol > .dj-submenu > li, > .dj-subtree > li');if(b&&b.getParent()==a){var d='';if(img=b.getElement('img')){d=img.get('alt')}else{d=b.get('html').replace(/(<small[^<]+<\/small>)/ig,"");d=d.replace(/(<([^>]+)>)/ig,"")}var e=new Element('option',{value:b.get('href'),text:j+d}).inject(g);if(!b.get('href')){e.set('disabled',true)}if(a.hasClass('active')){g.set('value',e.get('value'));active=true}}if(c)l(c,g,h+1)});if(!h&&!active){new Element('option',{value:'',text:'- MENU -'}).inject(g,'top');g.set('value','')}};var m=function(d){d.getElements('ul.dj-mobile-nav > li, ul.dj-mobile-nav-child > li').each(function(a){if(a.hasClass('parent')){var b=a.getElement('> a');if(b){var c=new Element('span.toggler');c.inject(b);b.addEvent('click',function(e){if(!a.hasClass('active'))e.preventDefault();else if(e.target.hasClass('toggler')){e.preventDefault();e.stopPropagation();a.removeClass('active')}})}}a.addEvent('click',function(){a.getSiblings().removeClass('active');a.addClass('active')})})};var n=function(b){var c=$(document.body).getChildren();var d=new Element('div.dj-offcanvas-wrapper');var f=new Element('div.dj-offcanvas-pusher');var g=new Element('div.dj-offcanvas-pusher-in');var h=b.getElement('.dj-offcanvas');$(document.body).addClass('dj-offcanvas-effect-'+h.getProperty('data-effect'));b.getElement('.dj-mobile-open-btn').addEvent('click',function(e){e.stopPropagation();h.store('scroll',window.getScroll().y);$(document.body).addClass('dj-offcanvas-open');g.setStyle('margin-top',-h.retrieve('scroll'))});d.inject($(document.body),'top');h.inject(d);f.inject(d);g.inject(f);c.each(function(a){a.inject(g)});$$('.dj-offcanvas-pusher, .dj-offcanvas-close-btn').addEvent('click',function(){if($(document.body).hasClass('dj-offcanvas-open')){g.setStyle('margin-top',0);$(document.body).removeClass('dj-offcanvas-open');window.scrollTo(0,h.retrieve('scroll'))}});m(h)};var o=function(a){a.getElement('.dj-mobile-open-btn').addEvent('click',function(e){a.getElement('.dj-accordion-in').slide('toggle')});a.getElement('.dj-accordion-in').set('slide',{resetHeight:true,duration:'short'});a.getElement('.dj-accordion-in').slide('hide');a.getElement('.dj-accordion-in').setStyle('display','block');m(a)};window.addEvent('domready',function(){$$('.dj-megamenu').each(function(a){var b=$(a.get('id')+'mobile');var c=$(a.get('id')+'mobileWrap');if(c){b.inject(c)}if(b){b.getElements('.dj-hideitem').destroy();if(b.hasClass('dj-megamenu-offcanvas')){n(b)}else if(b.hasClass('dj-megamenu-accordion')){o(b)}}})});window.addEvent('load',function(){$$('.dj-megamenu').each(function(a){var b=$(a.get('id')+'mobile');if(b){if(b.hasClass('dj-megamenu-select')){k(a,b)}}})})})(document.id);