import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Function to handle multiple promises
export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises
  return Promise.allSettled([signUp, upload])
    .then(results => results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}

