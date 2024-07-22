import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { AuthStateInterface } from '../../types/authState.interface';
// import { selectIsSubmitting } from '../../store/selectors';
import { selectIsSubmitting } from '../../store/reducers';

@Component({
	selector: 'mc-register',
	templateUrl: './register.component.html',
	standalone: true,
	imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class RegisterComponent {
	form = this.fb.nonNullable.group({
		username: ['', Validators.required],
		email: ['', Validators.required],
		password: ['', Validators.required],
	});

	isSubmitting$ = this.store.select(selectIsSubmitting);

	constructor(
		private fb: FormBuilder,
		private store: Store<{ auth: AuthStateInterface }>,
	) {}

	onSubmit() {
		console.info(this.form.getRawValue());
		const request: RegisterRequestInterface = {
			user: this.form.getRawValue(),
		};
		this.store.dispatch(register({ request }));
	}
}
