// pricing table

$(document).ready(function() {
    let tab = $('.pricing__tab');
    let tabActive = 'pricing__tab_active';
    let list = $('.pricing-table__list');
    let listActive = 'pricing-table__list_active';

    tab.click(function() {
        tab.removeClass(tabActive).eq($(this).index()).addClass(tabActive);
        list.removeClass(listActive).eq($(this).index()).addClass(listActive);
    });
});