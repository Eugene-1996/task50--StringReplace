function stringClean(s){
    let abc = s.replace(/[0-9]/g, " a")
 return abc
    }
 
 console.log(stringClean("123456789"))
 console.log(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "))
 console.log(stringClean("    "))

  let abc = s.replace(/[~%^&@*():;"., 0-9  '  ']/ig, " ")