/* eslint-disable no-plusplus */
export function seedDatabase(firebase) {
  for (let i = 1; i <= 5; i++) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: 'Ucdpx2Y0KjULNu3sJb1a5Sxedz33',
        imageSrc: `/images/users/charvi/${i}.jpg`,
        caption: [],
        likes: [],
        comments: [],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now(),
      });
  }
}
