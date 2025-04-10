$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });

    $('.main__switcher > p').click(function(event) {
        $(this).toggleClass('active');
    });
    $('.main__switcher').click(function(event) {
        $('body').toggleClass('active');
    });

    //CALCULATOR
    $('.calc__item').each(function () {
      const $item = $(this);
      const $range = $item.find('input[type="range"]');
      const $priceDiv = $item.find('.calc__price > div');
      const $span = $priceDiv.find('span');
  
      function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
  
      $range.on('input', function () {
        const val = $(this).val();
        const unit = $span.text().trim();
        const formatted = formatNumber(val);
  
        // Update only the text before the span
        $priceDiv.contents().filter(function () {
          return this.nodeType === 3; // text node
        }).first().replaceWith(formatted + ' ');
      });
    });

    // RANGE INPUT
    function updateRangeBg($range) {
        const min = Number($range.attr('min'));
        const max = Number($range.attr('max'));
        const val = Number($range.val());
        const percentage = ((val - min) / (max - min)) * 100;
    
        $range.css('background', `linear-gradient(to right, var(--bg-green) 0%, var(--bg-green) ${percentage}%, #ddd ${percentage}%, #ddd 100%)`);
      }
    
      $(document).ready(function () {
        $('input[type="range"]').each(function () {
          updateRangeBg($(this)); // initialize on load
        });
    
        $('input[type="range"]').on('input change', function () {
          updateRangeBg($(this));
        });
    });
    // LEAFLET MAP 
    $(document).ready(function () {
      const centerLatLng = [41.37382608808563, 69.27000330564698]; // Example: Tashkent
    
      const map = L.map('map').setView(centerLatLng, 16);
    
      // Add OpenStreetMap tiles
      L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      attribution: '',
      noWrap: true
      }).addTo(map);

      // Adjust zoom level based on screen width
      if (window.innerWidth < 696) {
          map.setZoom(15);
      }

      // Disable zoom control buttons
      map.zoomControl.remove();

      // Remove Leaflet attribution text
      map.attributionControl.setPrefix(false);
      
      // Custom icon (optional)
      const customIcon = L.icon({
      iconUrl: './img/png/icon.png', // example icon
      iconSize: [32, 39],
      iconAnchor: [15, 25]
      });
    
      // Add marker with a link
      const marker = L.marker(centerLatLng, { icon: customIcon }).addTo(map);
      marker.on('click', function () {
      window.location.href = 'https://www.google.com/maps/dir/41.3301805,69.3328349/ALFRAGANUS+UNIVERSITY,+%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D1%88%D0%B0%D2%B3%D0%B0%D1%80,+%D0%AE%D0%BD%D1%83%D1%81%D0%BE%D0%B1%D0%BE%D0%B4+%D1%82%D1%83%D0%BC%D0%B0%D0%BD%D0%B8,+%D0%A2%D0%B8%D0%BA%D0%BB%D0%B0%D0%BD%D0%B8%D1%88+%D0%9C%D0%A4%D0%99,+%D0%AE%D2%9B%D0%BE%D1%80%D0%B8,+Karakamish+St+2a-%D1%83%D0%B9,+100190,+%D0%A2%D0%BEshkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3529506,69.2839322,14z/data=!3m1!4b1!4m17!1m7!3m6!1s0x38ae8d98908cbb41:0x87328286b27698a6!2sALFRAGANUS+UNIVERSITY!8m2!3d41.3752065!4d69.2697859!16s%2Fg%2F11t9lqkmbn!4m8!1m1!4e1!1m5!1m1!1s0x38ae8d98908cbb41:0x87328286b27698a6!2m2!1d69.2697859!2d41.3752065?entry=ttu&g_ep=EgoyMDI1MDQwNy4wIKXMDSoASAFQAw%3D%3D'; // Replace with your desired link
      });
    
      // Add circle
      L.circle(centerLatLng, {
      color: '#16664D',
      fillColor: '#16664D',
      fillOpacity: 0.3,
      radius: 150 // meters
      }).addTo(map);
    });
})
