jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });
        
        // for html2pdf

        $('#click-to-print').click(function() {
          var jsPdfConfig = {
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 'smart' // or "smart", default is 16
          };
          var opt = {
            margin:       1,
            filename:     'Hristo-Hristov-portfolio.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 0.5 },
            pagebreak:    { mode: 'avoid-all', before: '.page-break' },
            width:        '2000px',
            windowWidth:  '2000px',
            jsPDF:        jsPdfConfig
          };
          html2pdf(document.body, opt);
        });
        
        $('.gallery-image > img').click(function() {
          $('#focussed-image').attr("src", this.src);
        });
    });
});