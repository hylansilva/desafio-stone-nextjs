export const FormatedHours = () =>{
  const now = new Date();
  const minutes = now.getMinutes();
  let regexMinutes
  if(minutes < 10){
    regexMinutes = minutes + "0"
  }else{
    regexMinutes = minutes
  }
  const nowRegex = `${now.getUTCHours()} : ${regexMinutes}`;
  return nowRegex
}
