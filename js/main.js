$(function () {
    $('.dropdown-detail').click(openOrderDetail);

    function openOrderDetail() {
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
    }

    function closeOrderDetail() {
        var self = $(this);

        self.removeClass('icon-circle-up').addClass('icon-circle-down');

        var currentRow = self.parent().parent();
        var detailRow = currentRow.next('tr.order-detail-info');

        detailRow.hide();

        self.unbind('click').bind('click', openOrderDetail);
    }
});