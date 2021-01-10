function t280_showMenu(recid) {
    var el = $("#rec" + recid); el.find('.t280__burger, .t280__menu__bg, .t280__menu__item:not(".tooltipstered"):not(".t280__menu__item_submenu")').click(function () {
        if ($(this).is(".t280__menu__item.tooltipstered, .t794__tm-link")) { return }
        $('body').toggleClass('t280_opened'); el.find('.t280').toggleClass('t280__main_opened'); var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor); if (window.location.hash && isChrome) { setTimeout(function () { var hash = window.location.hash; window.location.hash = ""; window.location.hash = hash }, 50) }
        t280_changeSize(recid)
    }); $('.t280').bind('clickedAnchorInTooltipMenu', function () { $('body').removeClass('t280_opened'); el.find('.t280').removeClass('t280__main_opened') }); if (el.find('.t-menusub__link-item')) { el.find('.t-menusub__link-item').on('click', function () { $('body').removeClass('t280_opened'); el.find('.t280').removeClass('t280__main_opened') }) }
}
function t280_changeSize(recid) {
    var el = $("#rec" + recid); var div = el.find(".t280__menu").height(); var bottomheight = el.find(".t280__bottom").height(); var headerheight = el.find(".t280__container").height(); var wrapper = el.find(".t280__menu__wrapper"); var win = $(window).height() - bottomheight - headerheight - 160; if (div > win) { wrapper.addClass('t280__menu_static') }
    else { wrapper.removeClass('t280__menu_static') }
}
function t280_changeBgOpacityMenu(recid) { var window_width = $(window).width(); var record = $("#rec" + recid); record.find(".t280__container__bg").each(function () { var el = $(this); var bgcolor = el.attr("data-bgcolor-rgba"); var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll"); var bgopacity = el.attr("data-bgopacity"); var bgopacity_afterscroll = el.attr("data-bgopacity2"); var menu_shadow = el.attr("data-menu-shadow"); if ($(window).scrollTop() > 20) { el.css("background-color", bgcolor_afterscroll); if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") { el.css('box-shadow', menu_shadow) } else { el.css('box-shadow', 'none') } } else { el.css("background-color", bgcolor); if (bgopacity != "0" && bgopacity != "0.0") { el.css('box-shadow', menu_shadow) } else { el.css('box-shadow', 'none') } } }) }
function t280_appearMenu() {
    $('.t280').each(function () {
        var el = $(this); var appearoffset = el.attr('data-appearoffset'); if (appearoffset != '') {
            if (appearoffset.indexOf('vh') > -1) { appearoffset = Math.floor(window.innerHeight * (parseInt(appearoffset) / 100)) }
            appearoffset = parseInt(appearoffset, 10); if ($(window).scrollTop() >= appearoffset) { if (el.css('visibility') == 'hidden') { el.finish(); el.css('top', '-50px'); el.css('opacity', '1'); el.css('visibility', 'visible') } } else { el.stop(); el.css('opacity', '0'); el.css('visibility', 'hidden') }
        }
    })
}
function t280_highlight(recid) {
    var url = window.location.href; var pathname = window.location.pathname; if (url.substr(url.length - 1) == "/") { url = url.slice(0, -1) }
    if (pathname.substr(pathname.length - 1) == "/") { pathname = pathname.slice(0, -1) }
    if (pathname.charAt(0) == "/") { pathname = pathname.slice(1) }
    if (pathname == "") { pathname = "/" }
    $(".t280__menu a[href='" + url + "']").addClass("t-active"); $(".t280__menu a[href='" + url + "/']").addClass("t-active"); $(".t280__menu a[href='" + pathname + "']").addClass("t-active"); $(".t280__menu a[href='/" + pathname + "']").addClass("t-active"); $(".t280__menu a[href='" + pathname + "/']").addClass("t-active"); $(".t280__menu a[href='/" + pathname + "/']").addClass("t-active")
}
function t367_createCookie(name, value, days) {
    if (days) { var date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); var expires = "; expires=" + date.toGMTString() }
    else var expires = ""; document.cookie = name + "=" + value + expires + "; path=/"
}
function t367_readCookie(name) {
    var nameEQ = name + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1, c.length); if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length) }
    return null
}
function t367_autoInit(recid) {
    var winWidth = $(window).width(); var screenMin = $('#rec' + recid).attr("data-screen-min"); var screenMax = $('#rec' + recid).attr("data-screen-max"); if (typeof screenMin !== 'undefined') { if (winWidth < parseInt(screenMin, 10)) { return !1 } }
    if (typeof screenMax !== 'undefined') { if (winWidth > parseInt(screenMax, 10)) { return !1 } }
    var el = $('#rec' + recid).find('.t367__opener'); var name = el.attr('data-cookie-name'); var time = el.attr('data-cookie-time'); var value = "t367cookie"; var cookie = t367_readCookie(name); var delay = el.attr('data-trigger-time'); var delaytime = delay * 1000; if (cookie) { $("#rec" + recid + " .t367").html("") } else if (el.length) { setTimeout(function () { el.trigger('click'); $("#rec" + recid + " .t367").html(""); t367_createCookie(name, value, time) }, delaytime) }
}
function t456_setListMagin(recid, imglogo) { if ($(window).width() > 980) { var t456__menu = $('#rec' + recid + ' .t456'); var t456__leftpart = t456__menu.find('.t456__leftwrapper'); var t456__listpart = t456__menu.find('.t456__list'); if (imglogo) { t456__listpart.css("margin-right", t456__leftpart.width()) } else { t456__listpart.css("margin-right", t456__leftpart.width() + 30) } } }
function t456_highlight() {
    var url = window.location.href; var pathname = window.location.pathname; if (url.substr(url.length - 1) == "/") { url = url.slice(0, -1) }
    if (pathname.substr(pathname.length - 1) == "/") { pathname = pathname.slice(0, -1) }
    if (pathname.charAt(0) == "/") { pathname = pathname.slice(1) }
    if (pathname == "") { pathname = "/" }
    $(".t456__list_item a[href='" + url + "']").addClass("t-active"); $(".t456__list_item a[href='" + url + "/']").addClass("t-active"); $(".t456__list_item a[href='" + pathname + "']").addClass("t-active"); $(".t456__list_item a[href='/" + pathname + "']").addClass("t-active"); $(".t456__list_item a[href='" + pathname + "/']").addClass("t-active"); $(".t456__list_item a[href='/" + pathname + "/']").addClass("t-active")
}
function t456_checkAnchorLinks(recid) { if ($(window).width() >= 960) { var t456_navLinks = $("#rec" + recid + " .t456__list_item a:not(.tooltipstered)[href*='#']"); if (t456_navLinks.length > 0) { t456_catchScroll(t456_navLinks) } } }
function t456_catchScroll(t456_navLinks) {
    var t456_clickedSectionId = null, t456_sections = new Array(), t456_sectionIdTonavigationLink = [], t456_interval = 100, t456_lastCall, t456_timeoutId; t456_navLinks = $(t456_navLinks.get().reverse()); t456_navLinks.each(function () {
        var t456_cursection = t456_getSectionByHref($(this)); if (typeof t456_cursection !== "undefined") {
            if (typeof t456_cursection.attr("id") != "undefined") { t456_sections.push(t456_cursection) }
            t456_sectionIdTonavigationLink[t456_cursection.attr("id")] = $(this)
        }
    }); t456_updateSectionsOffsets(t456_sections); t456_sections.sort(function (a, b) { return b.attr("data-offset-top") - a.attr("data-offset-top") }); $(window).bind('resize', t_throttle(function () { t456_updateSectionsOffsets(t456_sections) }, 200)); $('.t456').bind('displayChanged', function () { t456_updateSectionsOffsets(t456_sections) }); setInterval(function () { t456_updateSectionsOffsets(t456_sections) }, 5000); t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId); t456_navLinks.click(function () { var t456_clickedSection = t456_getSectionByHref($(this)); if (typeof t456_clickedSection !== "undefined" && !$(this).hasClass("tooltipstered") && typeof t456_clickedSection.attr("id") != "undefined") { t456_navLinks.removeClass('t-active'); $(this).addClass('t-active'); t456_clickedSectionId = t456_getSectionByHref($(this)).attr("id") } }); $(window).scroll(function () { var t456_now = new Date().getTime(); if (t456_lastCall && t456_now < (t456_lastCall + t456_interval)) { clearTimeout(t456_timeoutId); t456_timeoutId = setTimeout(function () { t456_lastCall = t456_now; t456_clickedSectionId = t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId) }, t456_interval - (t456_now - t456_lastCall)) } else { t456_lastCall = t456_now; t456_clickedSectionId = t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId) } })
}
function t456_updateSectionsOffsets(sections) { $(sections).each(function () { var t456_curSection = $(this); t456_curSection.attr("data-offset-top", t456_curSection.offset().top) }) }
function t456_getSectionByHref(curlink) { var hash = curlink.attr("href").replace(/\s+/g, '').replace(/.*#/, ''); var block = $(".r[id='" + hash + "']"); var anchor = $(".r[data-record-type='215']").has("a[name='" + hash + "']"); if (curlink.is('[href*="#rec"]')) { return block } else if (anchor.length === 1) { return anchor } else { return undefined } }
function t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId) {
    var t456_scrollPosition = $(window).scrollTop(), t456_valueToReturn = t456_clickedSectionId; if (t456_sections.length != 0 && t456_clickedSectionId == null && t456_sections[t456_sections.length - 1].attr("data-offset-top") > (t456_scrollPosition + 300)) { t456_navLinks.removeClass('t-active'); return null }
    $(t456_sections).each(function (e) {
        var t456_curSection = $(this), t456_sectionTop = t456_curSection.attr("data-offset-top"), t456_id = t456_curSection.attr('id'), t456_navLink = t456_sectionIdTonavigationLink[t456_id]; if (((t456_scrollPosition + 300) >= t456_sectionTop) || (t456_sections[0].attr("id") == t456_id && t456_scrollPosition >= $(document).height() - $(window).height())) {
            if (t456_clickedSectionId == null && !t456_navLink.hasClass('t-active')) { t456_navLinks.removeClass('t-active'); t456_navLink.addClass('t-active'); t456_valueToReturn = null } else { if (t456_clickedSectionId != null && t456_id == t456_clickedSectionId) { t456_valueToReturn = null } }
            return !1
        }
    }); return t456_valueToReturn
}
function t456_setPath() { }
function t456_setBg(recid) { var window_width = $(window).width(); if (window_width > 980) { $(".t456").each(function () { var el = $(this); if (el.attr('data-bgcolor-setbyscript') == "yes") { var bgcolor = el.attr("data-bgcolor-rgba"); el.css("background-color", bgcolor) } }) } else { $(".t456").each(function () { var el = $(this); var bgcolor = el.attr("data-bgcolor-hex"); el.css("background-color", bgcolor); el.attr("data-bgcolor-setbyscript", "yes") }) } }
function t456_appearMenu(recid) {
    var window_width = $(window).width(); if (window_width > 980) {
        $(".t456").each(function () {
            var el = $(this); var appearoffset = el.attr("data-appearoffset"); if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) { appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100))) }
                appearoffset = parseInt(appearoffset, 10); if ($(window).scrollTop() >= appearoffset) { if (el.css('visibility') == 'hidden') { el.finish(); el.css("top", "-50px"); el.css("visibility", "visible"); el.animate({ "opacity": "1", "top": "0px" }, 200, function () { }) } } else { el.stop(); el.css("visibility", "hidden") }
            }
        })
    }
}
function t456_changebgopacitymenu(recid) {
    var window_width = $(window).width(); if (window_width > 980) {
        $(".t456").each(function () {
            var el = $(this); var bgcolor = el.attr("data-bgcolor-rgba"); var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll"); var bgopacityone = el.attr("data-bgopacity"); var bgopacitytwo = el.attr("data-bgopacity-two"); var menushadow = el.attr("data-menushadow"); if (menushadow == '100') { var menushadowvalue = menushadow } else { var menushadowvalue = '0.' + menushadow }
            if ($(window).scrollTop() > 20) { el.css("background-color", bgcolor_afterscroll); if (bgopacitytwo == '0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } } else { el.css("background-color", bgcolor); if (bgopacityone == '0.0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } }
        })
    }
}
function t456_createMobileMenu(recid) { var window_width = $(window).width(), el = $("#rec" + recid), menu = el.find(".t456"), burger = el.find(".t456__mobile"); burger.click(function (e) { menu.fadeToggle(300); $(this).toggleClass("t456_opened") }); $(window).bind('resize', t_throttle(function () { window_width = $(window).width(); if (window_width > 980) { menu.fadeIn(0) } }, 200)) }
function t712_onSuccess(t712_form) {
    var t712_inputsWrapper = t712_form.find('.t-form__inputsbox'); var t712_inputsHeight = t712_inputsWrapper.height(); var t712_inputsOffset = t712_inputsWrapper.offset().top; var t712_inputsBottom = t712_inputsHeight + t712_inputsOffset; var t712_targetOffset = t712_form.find('.t-form__successbox').offset().top; if ($(window).width() > 960) { var t712_target = t712_targetOffset - 200 } else { var t712_target = t712_targetOffset - 100 }
    if (t712_targetOffset > $(window).scrollTop() || ($(document).height() - t712_inputsBottom) < ($(window).height() - 100)) { t712_inputsWrapper.addClass('t712__inputsbox_hidden'); setTimeout(function () { if ($(window).height() > $('.t-body').height()) { $('.t-tildalabel').animate({ opacity: 0 }, 50) } }, 300) } else { $('html, body').animate({ scrollTop: t712_target }, 400); setTimeout(function () { t712_inputsWrapper.addClass('t712__inputsbox_hidden') }, 400) }
    var successurl = t712_form.data('success-url'); if (successurl && successurl.length > 0) { setTimeout(function () { window.location.href = successurl }, 500) }
}
function t712_fixcontentheight(id) {
    var el = $("#rec" + id); var hcover = el.find(".t-cover").height(); var hcontent = el.find("div[data-hook-content]").outerHeight(); if (hcontent > 300 && hcover < hcontent) {
        var hcontent = hcontent + 120; if (hcontent > 1000) { hcontent += 100 }
        console.log('auto correct cover height: ' + hcontent); el.find(".t-cover").height(hcontent); el.find(".t-cover__filter").height(hcontent); el.find(".t-cover__carrier").height(hcontent); el.find(".t-cover__wrapper").height(hcontent); if ($isMobile == !1) { setTimeout(function () { var divvideo = el.find(".t-cover__carrier"); if (divvideo.find('iframe').length > 0) { console.log('correct video from cover_fixcontentheight'); setWidthHeightYoutubeVideo(divvideo, hcontent + 'px') } }, 2000) }
    }
}