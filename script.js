 
 // mobile menu toggle
 function toggleMenu() {
    var menu = document.getElementById("menu");
    var github = document.getElementById("github");
    if (menu.classList.contains("hidden") && github.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        github.classList.remove("hidden");

    } else {
        menu.classList.add("hidden");
        github.classList.add("hidden");
    }
}

// getValues function to get the values from the user input and store them in variables to be used later on in the code
function getValues() {
    var age = parseInt(document.getElementById("age").value);
    var temp = document.getElementsByName("gender");

    // checking if the user has selected the gender or not
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].checked) {
            var gender = temp[i].value;
        }
    }

    if (age > 12 || age == undefined || isNaN(age)) {
        alert("Please enter a valid age");
    }
    else if (gender == undefined) {
        alert("Please select a gender");
    }
    else {
        return [age, gender];
    }
}


function pickRandomGifts() {
    var [age, gender] = getValues();

    // gifts object with age
    // age is the key and value is an array of gifts for that age group
    var giftsForMale = {
        1: {
            "gift1": {
                "name": "Edushape Sensory Balls",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_41/1920386/5127uvxhnjl-sl500-6348547640795.jpg"
            },
            "gift2": {
                "name": "Melissa & Doug Go Tots Barnyard Tumble",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_41/1920365/0400016650764-multi-a3-63485187cb01a.jpg"
            },
            "gift3": {
                "name": "Fisher-Price Little People Friends Together Play House",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_41/1920370/51rmihoqaml-sl500-6348529cb11fe.jpg"
            },
            "gift4": {
                "name": "Squishmallows Naomi the Narwahl",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_41/1920373/31-tznt51ll-sl500-634853394681b.jpg"
            },
            "gift5": {
                "name": "Melissa & Doug Wooden Shape-Sorting Grocery Cart",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_41/1920353/51e-bqzyk9l-sl500-63484fd0d23a3.jpg"
            },
            "gift6": {
                "name": "Mushie Stacking Cups",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_41/1920393/41wljx9k-ql-sl500-63485523c72b3.jpg"
            },
            "gift7": {
                "name": "Infantino Press and Stay Sensory Blocks",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2020_40/1613739/screen_shot_2020-09-28_at_12-53-08_pm.png"
            }
        },
        2: {
            "gift1": {
                "name": "A fun intro to games",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2020/10/giftsfortwoyearolds-2048px-3.jpg?auto=webp&quality=75&width=980&dpr=2"
            },
            "gift2": {
                "name": "A Lego starter set",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2020/11/giftsfor2yearolds-2048px-legoduplo.jpg?auto=webp&quality=75&width=980&dpr=2"
            },
            "gift3": {
                "name": "A puzzle with a sense of place",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2021/09/giftsfortwoyearolds-2048px-mudpuppypuzzle.jpg?auto=webp&quality=75&width=980&dpr=2"
            },
            "gift4": {
                "name": "A tougher truck",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2020/11/giftsfortwoyearolds-2048px-5.jpg?auto=webp&quality=75&width=980&dpr=2"
            },
            "gift5": {
                "name": "A classic hopper",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2020/11/giftsfortwoyearolds-2048px-02023.jpg?auto=webp&quality=75&width=980&dpr=2"
            }
            ,
            "gift6": {
                "name": "Hape Kids’ Wooden Toy Ukulele in Blue",
                "img": "https://pyxis.nymag.com/v1/imgs/ae8/7e3/94bc9eb4982a14ae3bc8f4404e0e648068.rdeep-vertical.w245.jpg"
            },
            "gift7": {
                "name": "Elephant Plush Nursery Rocker",
                "img": "https://pyxis.nymag.com/v1/imgs/fd8/6ca/c7b5adabf9290ca9eb525d93b1c1c11fae-elephant.rsquare.w600.jpg"
            }
        },
        6: {
            "gift1": {
                "name": "Walkie-Talkies",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2019_44/1500687/516id-mpqxl-5db999d3760b2.jpg"
            },
            "gift2": {
                "name": "Mukukim Rock and Roll It Piano",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2021_41/1786245/51ip9fisbul-sl500--6164519d72779.jpg"
            },
            "gift3": {
                "name": "Lego Creative Suitcase",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2019_44/1500685/0369da84-fb9d-4ff6-b93e-9f1c83ecce24-1-be6cf8c0488c5037477a8b0571459c39-5db998fdc0984.jpeg"
            },
            "gift4": {
                "name": "Dynamo Dominoes",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2021_45/1802234/screen_shot_2021-11-10_at_2-55-31_pm.png"
            },
            "gift5": {
                "name": "Storytime Chess",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_33/1899922/51ijtba333l-sl500-62fe5b6dc8ce1.jpg"
            },
            "gift6": {
                "name": "Guess Who? Game",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2019_44/1500702/32bd1d69-9eeb-4de5-b6e6-6d309fc4bdc2-1-9992e56d9da84ef6c6d17a772b3dd3b3-5db99c1ea48d9.jpeg"
            },
            "gift7": {
                "name": "Hasbro Sorry!",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_33/1899934/51imskznbhl-sl500-62fe5c8b7d6f9.jpg"
            }
        },
        12: {
            "gift1": {
                "name": "Election Night Game",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2021_41/1786268/screen_shot_2021-10-11_at_11-30-08_am.png"
            },
            "gift2": {
                "name": "Funkoverse: Nightmare Before Christmas",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2022_34/1901011/41s3ck1lgll-sl500-6304192d9be9e.jpg"
            },
            "gift3": {
                "name": "Flybar Pogo Ball",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2021_41/1786528/screen_shot_2021-10-11_at_2-39-36_pm.png"
            },
            "gift4": {
                "name": "Outdoo Hover Soccer Ball",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2021_41/1786535/416fsaewa-l-sl500--61648642d8126.jpg"
            },
            "gift5": {
                "name": "Razor Black Label Hovertrax Hoverboard",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2021_41/1786306/screen_shot_2021-10-11_at_11-53-38_am.png"
            }
            ,
            "gift6": {
                "name": "Razor Black Label E100 Electric Scooter",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2021_41/1786308/screen_shot_2021-10-11_at_11-54-31_am.png"
            },
            "gift7": {
                "name": "Slackers NinjaLine Intro Kit",
                "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2021_41/1786297/screen_shot_2021-10-11_at_11-52-19_am.png"
            }
        }
    }

    var giftsForFemale = {
        1: {
            "gift1": {
                "name": "Little Tikes Go and Grow Lil' Rollin' Giraffe",
                "img": "https://m.media-amazon.com/images/I/816E8thbJaL._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift2": {
                "name": "SEREED Baby Balance Bike",
                "img": "https://m.media-amazon.com/images/I/61tilO4erpL._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift3": {
                "name": "VTech Sort and Discovery Activity Cube",
                "img": "https://m.media-amazon.com/images/I/71CSDlkzQpL._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift4": {
                "name": "ArtCreativity Pink and Purple Bubble Lawn Mower",
                "img": "https://m.media-amazon.com/images/I/71qTB8D868S._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift5": {
                "name": "Baby Balance Bike - Baby Bicycle",
                "img": "https://m.media-amazon.com/images/I/610HM0zFuRL._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift6": {
                "name": "GeerWest 3PC Princess Tent for Girls with Kids Ball Pit",
                "img": "https://m.media-amazon.com/images/I/81k2NJ6OBCS._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift7": {
                "name": "M SANMERSEN Piano Mat - Musical Keyboard",
                "img": "https://m.media-amazon.com/images/I/612DPARCHfL._AC_UL480_FMwebp_QL65_.jpg"
            }
        },
        2: {
            "gift1": {
                "name": "Webby Soft Animal Plush Elephant Toy",
                "img": "https://m.media-amazon.com/images/I/711DBUR31bS._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift2": {
                "name": "Tpz Dancing Cactus Plush Toy",
                "img": "https://m.media-amazon.com/images/I/61qv1AkN6rL._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift3": {
                "name": "A first piggy bank",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2020/11/giftsfortwoyearolds-2048px-1069.jpg?auto=webp&quality=75&width=980&dpr=2"
            },
            "gift4": {
                "name": "A fun intro to games",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2022/10/gifts-2yo-2048px-9227.jpg?auto=webp&quality=75&width=980&dpr=2"
            },
            "gift5": {
                "name": "A Lego starter set",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2022/10/gifts-2yo-2048px-7847.jpg?auto=webp&quality=75&width=980&dpr=2"
            },
            "gift6": {
                "name": "A tougher truck",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2022/10/gifts-2yo-2048px-9225.jpg?auto=webp&quality=75&width=980&dpr=2"
            },
            "gift7": {
                "name": "A first bike",
                "img": "https://cdn.thewirecutter.com/wp-content/media/2020/11/giftsfortwoyearolds-2048px-1584.jpg?auto=webp&quality=75&width=980&dpr=2"
            }
        },
        6: {
            "gift1": {
                "name": "SUNLIN Dance Mat",
                "img": "https://m.media-amazon.com/images/I/81XWzdoPb5L._AC_UL480_FMwebp_QL65_.jpg"
            },
            "gift2": {
                "name": "Kick Scooter",
                "img": "https://cdn.cdnparenting.com/articles/2020/02/28121425/462627298.jpg"
            },
            "gift3": {
                "name": "Doll and Dollhouse",
                "img": "https://cdn.cdnparenting.com/articles/2020/02/28121422/592967579.jpg"
            },
            "gift4": {
                "name": "Bicycle",
                "img": "https://cdn.cdnparenting.com/articles/2020/02/28121432/274859498.jpg"
            },
            "gift5": {
                "name": "Karaoke Player",
                "img": "https://cdn.cdnparenting.com/articles/2020/02/28121429/461197717.jpg"
            },
            "gift6": {
                "name": "Enchantly Fairy Costume",
                "img": "https://cdn2.momjunction.com/wp-content/uploads/2016/03/Enchantly-Girls-Dark-Purple-Teal-Fairy-Set.jpg.webp"
            },
            "gift7": {
                "name": "ZGMYC Cat Tassel Crossbody Bag",
                "img": "https://cdn2.momjunction.com/wp-content/uploads/2016/03/ZGMYC-Kids-Toddlers-Cat-Tassel-Crossdy-Bag-Small-Shoulder-Purse.jpg.webp"
            }
        },
        12: {
            "gift1": {
                "name": "Moon Lamp",
                "img": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605563826-best-gift-for-kids-moon-lamp-1605563809.jpg?crop=1xw:0.9538152610441767xh;center,top&resize=768:*"
            },
            "gift2": {
                "name": "Han Solo Backpack",
                "img": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1666103574-41SgE91lAAL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=768:*"
            },
            "gift3": {
                "name": "An old-school camera",
                "img": "https://i.insider.com/618153aa23745d001824a158?width=800&format=jpeg&auto=webp"
            },
            "gift4": {
                "name": "Jewelry with a secret",
                "img": "https://i.insider.com/618151131037b10018155c78?width=800&format=jpeg&auto=webp"
            },
            "gift5": {
                "name": "Cherry Blossom Bonsai LED Light Tree",
                "img": "https://giftlab.co/wp-content/uploads/2021/03/Screenshot-2021-03-06-at-9.55.13-AM.png"
            }
            ,
            "gift6": {
                "name": "LED Photo Clip String Lights",
                "img": "https://giftlab.co/wp-content/uploads/2021/03/Screen-Shot-2021-03-06-at-8.44.52-PM.png"
            },
            "gift7": {
                "name": "Pajama Set",
                "img": "https://giftlab.co/wp-content/uploads/2021/03/Screen-Shot-2021-09-25-at-10.47.23-PM.png"
            }
        }
    }

    // returns a random number between 1 and length of the object
    // 1 2 6 12
    // age 0-1 for 1
    // age 1-2 for 2
    // age 2-6 for 6
    // age 6-12 for 12

    // if gender male then giftsForMale else if gender female then giftsForFemale

    if (gender == "male") {
        var gifts = giftsForMale;
    } else if (gender == "female") {
        var gifts = giftsForFemale;
    }

    if (age == 1) {
        return gifts[1][`gift${Math.floor(Math.random() * Object.keys(gifts[1]).length) + 1}`];
    } else if (age == 2) {
        return gifts[2][`gift${Math.floor(Math.random() * Object.keys(gifts[2]).length) + 1}`];
    } else if (age >= 3 && age <= 6) {
        return gifts[6][`gift${Math.floor(Math.random() * Object.keys(gifts[6]).length) + 1}`];
    } else if (age >= 7 && age <= 12) {
        return gifts[12][`gift${Math.floor(Math.random() * Object.keys(gifts[12]).length) + 1}`];
    }

}


// get the age of the child from getAge function
// and call the getGift function to get a random gift for the child
function randomGift() {
    var gift = pickRandomGifts();

    console.log(pickRandomGifts());

    // display the gift
    var div = document.getElementById("gift");

    // remove default text
    if (div.classList.contains("flex")) {
        div.classList.remove("flex");
        div.classList.remove("items-center");
        div.classList.remove("justify-around");
    }

    // add gift name and image
    div.innerHTML = `<p class="break-words m-2">${gift.name}</p><img src="${gift.img}" class="object-cover object-center  h-48 w-60" alt="${gift.name}"/>`;

}
