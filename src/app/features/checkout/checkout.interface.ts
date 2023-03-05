import { FormControl } from '@angular/forms';

export interface IPizzaData {
  firstName: string;
  address: string;
  phone: string;
}

export interface IPizzaForm {
  firstName: FormControl<string | null>;
  address: FormControl<string | null>;
  phone: FormControl<string | null>;
}
