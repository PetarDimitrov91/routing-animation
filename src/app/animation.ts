import {
  trigger,
  animate,
  transition,
  style,
  query
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      query(':enter',
        style({transform: 'translateX(100%)'}),
        {optional: true}),
      query(':leave',
        animate('500ms ease',
          style({transform: 'translateX(-100%)'})),
        {optional: true}),
      query(':enter',
        animate('500ms ease',
          style({transform: 'translateX(0%)'})),
        {optional: true}),
    ])
  ]);
