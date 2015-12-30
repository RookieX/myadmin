$(function () {
    //显示或隐藏学校订单详情
    $('.dropdown-detail').click(openOrderDetail);

    //显示学校订单操作
    $('#college_order_table tbody tr').click(function () {
        $('.opt-modal').slideDown('fast');
    });

    //隐藏学校订单操作
    $('.opt-container .opt-modal-close').click(function () {
        $('.opt-modal').slideUp('fast');
    });
});

//显示学校订单详细信息
function openOrderDetail(e) {
    var self = $(this);

    var currentRow = self.parent().parent();

    self.removeClass('icon-circle-down').addClass('icon-circle-up');

    var detailRow = currentRow.next('tr.order-detail-info');

    if (!detailRow.size()) {
        var tdCount = currentRow.find('td').length;
        detailRow = $('<tr>').addClass('order-detail-info').insertAfter(currentRow);
        var newCell = $('<td>').attr('colspan', tdCount).appendTo(detailRow);
    }
    detailRow.show();
    self.unbind('click').bind('click', closeOrderDetail);

    e.stopPropagation();
}

//隐藏学校订单详细信息
function closeOrderDetail(e) {
    var self = $(this);

    self.removeClass('icon-circle-up').addClass('icon-circle-down');

    var currentRow = self.parent().parent();
    var detailRow = currentRow.next('tr.order-detail-info');

    detailRow.hide();

    self.unbind('click').bind('click', openOrderDetail);

    e.stopPropagation();
}
