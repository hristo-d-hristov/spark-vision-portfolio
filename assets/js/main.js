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
        

        var jsPdfConfig = {
          orientation: 'p',
          unit: 'mm',
          format: 'a4',
          putOnlyUsedFonts: true,
          floatPrecision: 16 // or "smart", default is 16
        };

        $('#click-to-print').click(function() {
          var opt = {
            margin:       1,
            filename:     'Hristo-Hristov-portfolio.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: window.devicePixelRatio },
            pagebreak:    { mode: 'avoid-all', before: '.page-break' },
            jsPDF:        jsPdfConfig
          };
          html2pdf(document.body);
        });
    });
});