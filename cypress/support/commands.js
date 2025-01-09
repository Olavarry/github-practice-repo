// a method to help us reduce noise, some of these errors are not valid
// MCB suggested adding logs to analyze which exceptions may have valid data
// log is temp until we figure out a solution of using cy.log inside Cypress.on
// Learn more about uncaught exception handling here - https://docs.cypress.io/api/events/catalog-of-events#Uncaught-Exceptions

Cypress.Commands.add('ignoreUncaughtException', (accountId, pagePath, log = 'cy') => {
	const resizeObserverError = /^[^(ResizeObserver loop limit exceeded)]/;

	Cypress.on('uncaught:exception', (err, runnable) => {
		const errorMessage = {
			accountId,
			pagePath,
			error: err
		};
		/* returning false here prevents Cypress from failing the mobile tests */
		if (resizeObserverError.test(err.message)) {
			return false;
		}
		if (log === 'cy') {
			cy.log(errorMessage);
		} else {
			console.log(errorMessage);
		}
		return false;
	});
});

//  If you need to catch the uncaught:exception error then use this command.
Cypress.Commands.add('catchUncaughtException', () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
		throw err;
	});
});