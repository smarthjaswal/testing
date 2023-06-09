
// // $('body').hide();
// var settings = {
//     "url": "https://restcountries.com/v2/all",
//     "method": "GET",
//     "timeout": 0,
// };
// var names = $('.message');
// $.ajax(settings).done(function (response) {
//     $.each(response, function (i, country) {
//         names.append("<li class='first'>" + country.name+ "</li>")
//         console.log(country.flags.svg);
//     });
    
//     var numOfItem = $('.first').length;
//     console.log(numOfItem);
//     var limit = 19;
//     $(".first:gt(" + (limit) + ")").hide();
//     var totalPages = Math.round(numOfItem / limit);
//     console.log(totalPages);
//     $(".pagination").append("<li class='currentPage active'><a class='page-link' href='#'>" + 1 + "</a></li>")

//     for (var i = 2; i <= totalPages; i++) {
//         $(".pagination").append("<li class='currentPage'  class='page-item'><a class='page-link' href='#'>" + i + "</a></li>")
//     }
//     $(".pagination").append("<li class='page-item disabled'><a class='page-link' href='#'' tabindex='-1'>next</a></li>")
//     $(".pagination li.currentPage").on("click", function () {
//         var evenpage = $(this).index();
//         if ($(this).hasClass("active")) {
//             return false;
//         }
//         else {
//             var cppage = $(this).index();
//             $(".pagination li").removeClass("active");
//             $(this).addClass("active");
//             $(".first").hide();
//             var gTotal = limit * cppage;
//             for (var i = gTotal - limit; i < gTotal; i++) {
//                 $(".first:eq(" + i + ")").show();
//             }
//         }
//         //    alert("user clicked on:"+ evenpage);
//     })

// });


// // alert(numOfItem);

// // $(".pagination").append("<li class='page-item'> <a class='page-link' href='#'>"Next"</a></li>")

// // $(".pagination").append("<li class='page-item'><a class='page-link' href='#'>"+Next+"</a></li>")

// {/* <li class="page-item disabled">
//                 <a class="page-link" href="#" tabindex="-1">next</a>
//               </li> */}