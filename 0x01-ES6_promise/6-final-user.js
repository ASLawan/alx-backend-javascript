import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signPromise, photoPromise]).then((results) => results.map((result) => {
    if (result.status === 'fulfilled') {
      return {
        status: 'fulfilled',
        value: result.value,
      };
    }
    return {
      status: 'rejected',
      value: result.reason,
    };
  }));
}
