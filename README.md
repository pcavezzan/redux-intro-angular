# redux-pattern-intro

Ce repository montre le fonctionnement du pattern REDUX introduit via le pattern [FLUX](https://facebookarchive.github.io/flux/) par Facebook.

Il a été utilisé pour introduire le pattern REDUX à des équipes de développements en montrant que le pattern s'applique quelque soit la technologie front 
en prenant 2 exemple: angular et react.

## Angular

Sur angular, on retrouvera un commit où on a implémenté à la main le pattern redux. Puis un autre commit, où on voit comment on peut s'appuyer sur un framework
plutôt que de tous construire à la main en s'appuyant sur des fonctionnalités natives au framework (memoization, binding avec le router, etc). Le framework sur lequel
on s'appuyera est [NgRx](https://ngrx.io/)

## React

Sur react, on retrouvera un commit où on a utilisé nativement le package redux et où on l'a branché à React.
Puis on retrouvera un autre commit, où on s'appuie sur un framework existant également [redux-toolkit](https://redux-toolkit.js.org/) avec différents commit
montrant les différentes stratégie pour gérer les side effects avec:
* [redux-thunk](https://github.com/reduxjs/redux-thunk), intégré nativement à redux-toolkit,
* [redux-saga](https://redux-saga.js.org/),
* [redux-observable](https://redux-observable.js.org/)

_Remarque: nous aurions pu également utiliser le package redux natif dans la partie angular._

# Resources 

* [What is Flux Architecture? Why Facebook used it? and the Comparison with MVC architecture](https://medium.com/@grover.vinayak0611/what-is-flux-architecture-why-facebook-used-it-and-the-comparison-with-mvc-architecture-49c01ed5d2e1)
* [Hacker Way: Rethinking Web App Development at Facebook](https://youtu.be/nYkdrAPrdcw), voir à partir de la 11e minute
* [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)
* [Custom Reactive Stores with BehaviorSubject](https://ultimatecourses.com/blog/custom-reactive-services-stores-angular-behaviorsubject)
* [NgRx](https://ngrx.io/docs)
* [Angular state management](https://massivepixel.io/blog/angular-state-management/)
* [NgRx Tips I Needed in the Beginning](https://dev.to/this-is-angular/ngrx-tips-i-needed-in-the-beginning-4hno)
* [Level Up Your NgRx Skills With 10 Time-Tested Best Practices](https://tomastrajan.medium.com/level-up-your-ngrx-skills-with-10-time-tested-best-practices-6c837fb14877)
* [NGRX Bad Practices](https://indepth.dev/posts/1442/ngrx-bad-practices)
* [NGRX Best Practices](https://indepth.dev/posts/1451/ngrx-best-practices-new)
* [A journey into NgRx Selectors](https://indepth.dev/posts/1456/a-journey-into-ngrx-selectors)
