$(document).ready(function() { 
    var data; 
    var searchTerm = [];
    var max;
    var divClone = $(".searchBar").clone(); 


    $.getJSON('data.json', function sra(emp) { 
        data = emp;
        let i = 0;
        while(data[i] != null) {
            $('.flexCont').append(`<div class="jobListing jobListing${i}"> </div>`);
            
            $(`.jobListing${i}`).append(`<img src="${data[i].logo}" alt="">`);
            
            $(`.jobListing${i}`).append(`<div class="textListing textListing${i}"> </div>`);

           

            if(data[i].featured == true) {
                $(`.textListing${i}`).append(`<span class="featuredProp">FEATURED</span>`);
            }
            
            if(data[i].new == true) {
                $(`.textListing${i}`).append(`<span class="newProp">NEW!</span>`);
            }
           
            $(`.textListing${i}`).append(`<div class="compSpan compSpan${i}"> </div>`);

            $(`.compSpan${i}`).append(`<span class="companyName">${data[i].company}</span>`);

            

            $(`.compSpan${i}`).append(`<p class="positionName">${data[i].position}</p>`);

            $(`.compSpan${i}`).append(`<div class="moreInfo moreInfo${i}">
                  <p>
                    <span class="posted">${data[i].postedAt}</span>
                    &middot;
                    <span class="contract">${data[i].contract}</span>
                    &middot;
                    <span class="location">${data[i].location}</span>
                  </p>
                </div>
                `);
            
            $(`.jobListing${i}`).append(`
            <div class="languagesCont languagesCont${i}">
                <span class="role">${data[i].role}</span>
                <span class="level">${data[i].level}</span>
            </div>
            `);

            let j = 0;
            while(data[i].languages[j] != null) {
                $(`.languagesCont${i}`).append(`<span class="language">${data[i].languages[j]}</span>`);
                j++;
            }
            j = 0;
            while(data[i].tools[j] != null) {
                $(`.languagesCont${i}`).append(`<span class="tools">${data[i].tools[j]}</span>`);
                j++;
            }
            i++;
        }
        max = i;
    });

    $(document).on('click', '.languagesCont span', function(){ 
        searchTerm.push(this.innerHTML);
        let firstLength = searchTerm.length;
        searchTerm = unique(searchTerm);
        let i = 0;
        searchSystem(searchTerm);
        if(firstLength == searchTerm.length) {
            $(".searchBar").replaceWith(divClone.clone());
            while(i < searchTerm.length) {
                $(`.searchBar`).append(`
                <div class="searchComponent">
                    <span class="close" id="${searchTerm[i]}">&#10006;</span>
                    <span class="searchTerm">${searchTerm[i]}</span>
                </div>
                `);
                i++;
            }
        }
        
    }); 

    $(document).on('click', '.close', function(){ 
        searchTerm.splice( $.inArray(this.id,searchTerm) ,1 );
        let firstLength = searchTerm.length;
        searchTerm = unique(searchTerm);
        let i = 0;
        reverseSearchSystem(searchTerm);
        if(firstLength == searchTerm.length) {
            $(".searchBar").replaceWith(divClone.clone());
            while(i < searchTerm.length) {
                $(`.searchBar`).append(`
                <div class="searchComponent">
                    <span class="close" id="${searchTerm[i]}">&#10006;</span>
                    <span class="searchTerm">${searchTerm[i]}</span>
                </div>
                `);
                i++;
            }
        }
    }); 

    function searchSystem(searchTerm) {
        let i = 0;
        while(i < searchTerm.length) {
            let j = 0;
            while(j < max) {
                if ($(`.jobListing${j}`).css('display') == 'none')
                {
                    
                } else {
                    if(searchTerm[i] == data[j].role) {
                        $(`.jobListing${j}`).show();
                    } else if(searchTerm[i] == data[j].level) {
                        $(`.jobListing${j}`).show();
    
                    } else if($.inArray(searchTerm[i], data[j].languages) != -1) {
                        $(`.jobListing${j}`).show();
    
                    } else if($.inArray(searchTerm[i], data[j].tools) != -1) {
                        $(`.jobListing${j}`).show();
    
                    } else {
                        $(`.jobListing${j}`).hide();
                    }
    
                }
                
                j++;
            }
            i++;
        }
    }

    function reverseSearchSystem(searchTerm) {
        let i = 0;
        let j = 0;
        let aux = 0;

        if(searchTerm.length == 0) {
            while(aux < max) {
                $(`.jobListing${aux}`).show();
                aux++;
            } 
        }

        while(j < max) {
            if(searchTerm[i] == data[j].role) {
                $(`.jobListing${j}`).show();
            } else if(searchTerm[i] == data[j].level) {
                $(`.jobListing${j}`).show();

            } else if($.inArray(searchTerm[i], data[j].languages) != -1) {
                $(`.jobListing${j}`).show();

            } else if($.inArray(searchTerm[i], data[j].tools) != -1) {
                $(`.jobListing${j}`).show();

            } else {
                // $(`.jobListing${j}`).hide();
            }
        
            j++;
        }
        i++;
        searchSystem(searchTerm);
    }

    function unique(list) {
        var result = [];
        $.each(list, function(i, e) {
          if ($.inArray(e, result) == -1){
              result.push(e);
          }
        });
        return result;
      }
    
});

var mainApp = {};

(function() {
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      uid = user.uid;
      // console.log(uid);
    } else {
      uid = null;
      window.location.replace("/Dark Themed Landing Page/index.html");
    }
  });
})()

function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      window.location.replace("/Dark Themed Landing Page/index.html");
      }).catch(function(error) {
        // An error happened.
      });
}