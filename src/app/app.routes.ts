import { Route } from '@angular/router';

export const routes: Route[] = [
	{
		path: 'register',
		loadChildren: () =>
			import('./auth/auth.routes').then((m) => m.RegisterRoutes),
	},
];
