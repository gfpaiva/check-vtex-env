'use strict';

function CheckEnv(location) {
	this.location = location.split('.')[0];
	this.env = /qa$/.test(this.location) ? 'qa' : 'production';
	this.template = `<div class="ext-check-env ext-check-env--${this.env}">
						<p class="ext-check-env__env">${this.env} enviroment</p>
						<p class="ext-check-env__store">${this.location}</p>
					</div>`;
	this.body = document.querySelector('body');

	this.render = function() {
		var content = document.createElement('div');

		content.innerHTML = this.template;
		document.body.prepend(content);
	};

	this.currentCssChanges = function() {
		let bar = document.querySelector('#topbar-vtex');

		let checkBar = setInterval(function() {
			if(document.querySelector('#topbar-vtex')) {
				bar = document.querySelector('#topbar-vtex');
				bar.classList.add('ext-check--runned');
				clearInterval(checkBar);
			}
		},50);

		this.body.classList.add('ext-check--runned');
	};

	this.init = function() {
		this.currentCssChanges();
		this.render();
	};
};

let ce = new CheckEnv(window.location.host);
ce.init();
