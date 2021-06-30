let companyDetails = [
 
  {
    companyName: "icrats",
    personName: "harsha",
    personPhoneNumber: "9539525487",
    personEmailId: "harsha@gmail.com",
  }, 
  {
    companyName: "tcs",
    personName: "joann",
    personPhoneNumber: "9495127607",
    personEmailId: "joann@gmail.com",
  }
  
];

const register = (
  companyName,
  personName,
  personPhoneNumber,
  personEmailId
) => {
  for (var i = 0; i < companyDetails.length; i++) {
    if (companyDetails[i].companyName === companyName) {
      return {
        status: false,
        statusCode: 422,
        message: "User already exists.Plz login",
      };
    }
  }

  companyDetails.push({
    companyName,
    personName,
    personPhoneNumber,
    personEmailId,
  });
  return {
    status: true,
    statusCode: 200,
    message: "Succesfully Registered",
  };
};


const login=(personName, personPhoneNumber)=> {
  


  const loginName=companyDetails.find(item => item.personName ===personName)
 if(!loginName){
  return {
    status: false,
  statusCode: 422,
message: "Not registered",
   };
 }
 
  if(loginName.personPhoneNumber===personPhoneNumber){
    return {
       status: true,
      statusCode: 200,
    message: "Login Successfull",
    }
  
  }
  else{
    return {
        status: false,
      statusCode: 422,
     message: "Incorrect phone number",
      };
          
  }
  // for (var i = 0; i < companyDetails.length; i++) {
  //   if (companyDetails[i].personName === personName) {
  //     if (companyDetails[i].personPhoneNumber === personPhoneNumber) {
  //       return {
  //         status: true,
  //         statusCode: 200,
  //         message: "Login Successfull",
  //       };
  //       continue;
  //     } else {
  //       return {
  //         status: false,
  //         statusCode: 422,
  //         message: "Incorrect phone number",
  //       };
       
  //     }
      
  //   } else {
  //     return {
  //       status: false,
  //       statusCode: 422,
  //       message: "Not Registered",
  //     };
      
  //   }
  // }
  // 
  // companyDetails.map((e) => {
  //   if (
  //     e.personName == personName &&
  //     e.personPhoneNumber == personPhoneNumber
  //   ) {
  //     return {
  //       status: true,
  //       statusCode: 200,
  //       message: "Login Successfull",
  //     };
  //   } else {
  //     return { status: false, statusCode: 422, message: "Not Registered" };
  //   }
  // })
}

module.exports = {
  register,
  login,
};
