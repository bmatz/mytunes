import {Component} from 'angular2/core';

@Component({
	selector: 'footer-component',
	template: `
		<footer class="footer">
			<div class="container">
				<a class="text-muted" href="/">Alejandro Rangel, {{ year }}</a>
				<a class="text-muted" href="https://twitter.com/arangelp" target="_blank"><i class="fa fa-twitter"></i> @arangelp</a>
				<a class="text-muted" href="https://www.linkedin.com/in/arangelp" target="_blank"><i class="fa fa-linkedin"></i> Linkedin</a>
				<a class="text-muted" href="http://www.arangelp.com/" target="_blank"><i class="fa fa-wordpress"></i> Website</a>
			</div>
		</footer>`
})
export class FooterComponent {
	a
	constructor() {
		this.year = new Date().getFullYear();
	}
}
