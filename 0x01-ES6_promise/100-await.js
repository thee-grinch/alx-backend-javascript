import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('photo.jpg');
    const user = await createUser('Jane', 'Doe');
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
