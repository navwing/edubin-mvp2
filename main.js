$(document).ready(function () {
  $(".single-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slide-arrow next-arrow slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slide-arrow prev-arrow slick-arrow"><i class="fa-solid fa-angle-right"></i></button>'
  });
});

$(document).ready(function () {
    $(".category-slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      prevArrow: '<button class="slide-arrow next-arrow slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
      nextArrow: '<button class="slide-arrow prev-arrow slick-arrow"><i class="fa-solid fa-angle-right"></i></button>'
    });
  });

  $(document).ready(function () {
    $(".course-part-container .slide").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      prevArrow: '<button class="slide-arrow next-arrow slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
      nextArrow: '<button class="slide-arrow prev-arrow slick-arrow"><i class="fa-solid fa-angle-right"></i></button>'
    });
  });

  
  $(document).ready(function () {
    $(".testimonial-slides").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      dots: true,
      arrows : false
    });
  });

  $(document).ready(function () {
    $(".patnar-logo-container").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      arrows : false
    });
  });
  

  
  const api = "https://60d4611a61160900173cb070.mockapi.io/courses";

  function App () {
    getApi(printData)
  }

  App ();


  function getApi (callBack) {
    fetch(api, {
      method: "GET"
    })
    .then((res) => res.json())
    .then(callBack)
    .catch((err) => {
      console.log(err)
    })
    .finally(console.log("GET Data thanh cong !"))
  }


  function printData (returnData) {
    console.log(returnData)
      const printData = returnData.map(() => {
          return `
          
          `
      })
  }


