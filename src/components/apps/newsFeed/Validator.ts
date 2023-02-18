import { IHashTag } from '@app/components/common/BaseHashTag/BaseHashTag';
import { AppDate } from '../../../constants/Dates';

abstract class Validator {
  validate(): boolean {
    return true;
  }
}

export class AuthorValidator extends Validator {
  initial: string;
  current: string;

  constructor(initial: string, current: string) {
    super();
    this.initial = initial;
    this.current = current;
  }

  validate(): boolean {
    return this.current ? this.initial.includes(this.current) : true;
  }
}

export class TitleValidator extends Validator {
  initial: string;
  current: string;

  constructor(initial: string, current: string) {
    super();
    this.initial = initial;
    this.current = current;
  }

  validate(): boolean {
    return this.current ? this.initial.includes(this.current) : true;
  }
}

export class DatesValidator extends Validator {
  initial: AppDate;
  current: [AppDate | null, AppDate | null];

  constructor(initial: AppDate, current: [AppDate | null, AppDate | null]) {
    super();
    this.initial = initial;
    this.current = current;
  }

  validate(): boolean {
    const [from, to] = this.current;
    return from ? this.initial.isAfter(from) && this.initial.isBefore(to) : true;
  }
}

export class TagsValidator extends Validator {
  initial: IHashTag[];
  current: IHashTag[];

  constructor(initial: IHashTag[], current: IHashTag[]) {
    super();
    this.initial = initial;
    this.current = current;
  }

  validate(): boolean {
    return this.current.length
      ? !!this.initial.filter((n) => {
          return this.current.indexOf(n) !== -1;
        }).length
      : true;
  }
}
