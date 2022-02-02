import { PersonalInfoFormValues } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/PersonalInfo';
import { Dates } from '@app/constants/Dates';
import { UserModel } from '@app/domain/UserModel';

export const profileMap = (user: UserModel): PersonalInfoFormValues => ({
  firstName: user.firstName,
  lastName: user.lastName,
  nickName: user.nickName,
  sex: user.sex,
  birthday: user.birthday ? Dates.getDate(user.birthday) : undefined,
  language: user.lang,
  phone: user.phone.number,
  email: user.email.name,
  country: user.country,
  city: user.city,
  address1: user.address1,
  address2: user.address2,
  zipcode: user?.zipcode,
  website: user?.website,
  twitter: user?.socials?.twitter,
  linkedin: user?.socials?.linkedin,
  facebook: user?.socials?.facebook,
});

export const profileUnMap = (user: UserModel, values: PersonalInfoFormValues): UserModel => ({
  ...user,
  firstName: values.firstName,
  lastName: values.lastName,
  nickName: values.nickName,
  sex: values.sex,
  birthday: values.birthday ? Dates.format(values.birthday, 'L') : undefined,
  lang: values.language,
  phone: {
    number: values.phone,
    verified: user.phone.number === values.phone && user.phone.verified,
  },
  email: {
    name: values.email,
    verified: user.email.name === values.email && user.email.verified,
  },
  country: values.country,
  city: values.city,
  address1: values.address1,
  address2: values.address2,
  zipcode: values.zipcode,
  website: values.website,
  socials: {
    twitter: values.twitter,
    facebook: values.facebook,
    linkedin: values.linkedin,
  },
});
