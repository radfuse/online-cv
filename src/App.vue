<template>
	<div id="app" class="container mx-auto pt-6 md:pt-20 md:flex">
		<aside class="w-full md:w-1/5 px-3 print-hide">
			<div class="sticky mb-2 md:mb-0" style="top: 1em">
				<img alt="Barnabás KISS" class="mx-auto" src="./assets/CV.png">

				<div class="md:bg-white w-full py-3">
					<div class="text-center hidden md:block">
						<a href="#" class="block py-1 text-lg hover:text-red-600" v-scroll-to='"#about-me"'>About me</a>
						<a href="#" class="block py-1 text-lg hover:text-red-600" v-scroll-to='"#abilities"'>Abilities</a>
						<a href="#" class="block py-1 text-lg hover:text-red-600" v-scroll-to='"#career"'>Career</a>
						<a href="#" class="block py-1 text-lg hover:text-red-600" v-scroll-to='"#education"'>Education</a>
					</div>
					<div class="socials flex justify-center mt-2">
						<a class="rounded-full text-gray-600 border-gray-600 border-2 text-center mx-1 hover:text-red-600 hover:border-red-600" href="https://www.facebook.com/kisbee/" target="_blank"><i class="fa fa-facebook"></i></a>
						<a class="rounded-full text-gray-600 border-gray-600 border-2 text-center mx-1 hover:text-red-600 hover:border-red-600" href="https://www.linkedin.com/in/barnabas-kiss-4a2635a6" target="_blank"><i class="fa fa-linkedin"></i></a>					
					</div>
				</div>
			</div>
		</aside>

		<div class="w-full md:w-4/5 px-3">
			<div class="flex page-break">
				<img alt="Barnabás KISS" class="hidden print-show mr-4" style="height: 233px" src="./assets/CV.png">
				
				<section class="mb-12 bg-white py-4" id="about-me">
					<Header :title="'About me'" />

					<div class="px-6 my-5 leading-8">
						<h1 class="font-bold text-3xl">Barnabás KISS</h1>
						<h2 class="font-thin text-2xl">Full-stack Web Developer</h2>
					</div>

					<p class="mb-5 px-6">
						I have learned programming as a hobby years ago. Now it is my passion and profession.
					</p>

					<div class="pb-2 px-3">
						<div class="md:flex">
							<div class="w-full md:w-1/2 text-justify px-3 mb-6 md:mb-0">
								As a full-stack web developer I have encountered many forms of problems, challenges and ideas that I had to put into practice.
								I have contributed to a variety of projects, from small websites to complex systems and mobile applications.
								I am capable of working well in a team, but I also enjoy being on my own.
							</div>
							<div class="w-full md:w-1/2 text-justify px-3">
								In my free time, I enjoy developing my skills, staying up to date and experimenting with new technologies.
							</div>
						</div>
					</div>
				</section>
			</div>

			<section class="mb-16 mt-5" id="abilities">
				<div class="bg-white pb-5 pt-4">
					<Header :title="'Abilities'" :marginBottom="false" />
				</div>

				<div class="bg-white page-break">
					<Subheader :title="'Skills'" />

					<div class="md:flex px-3 pb-4">
						<div class="w-full md:w-1/2">
							<Ability v-for="item in abilities.skills.first" :item="item" :key="item.name" />
						</div>

						<div class="w-full md:w-1/2">
							<Ability v-for="item in abilities.skills.second" :item="item" :key="item.name" />
						</div>
					</div>
				</div>
				
				<div class="bg-white print-margin-top print-padding-top">
					<Subheader :title="'Tools'" />

					<div class="md:flex px-3 pb-4">
						<div class="w-full md:w-1/2">
							<Ability v-for="item in abilities.tools.first" :item="item" :key="item.name" />
						</div>

						<div class="w-full md:w-1/2">
							<Ability v-for="item in abilities.tools.second" :item="item" :key="item.name" />
						</div>
					</div>
				</div>
				
				<div class="bg-white pb-4">
					<Subheader :title="'Languages'" />

					<div class="md:flex px-3">
						<div class="w-full md:w-1/2">
							<Ability v-for="item in abilities.languages.first" :item="item" :key="item.name" />
						</div>

						<div class="w-full md:w-1/2">
							<Ability v-for="item in abilities.languages.second" :item="item" :key="item.name" />
						</div>
					</div>
				</div>

			</section>

			<section class="mb-16 mt-5 bg-white py-4" id="career">
				<Header :title="'Career'" />

				<Experience v-for="experience in json.experiences" :item="experience" :key="experience.name" />
			</section>

			<section class="mb-16 mt-5 bg-white py-4" id="education">
				<Header :title="'Education'" />
				
				<Experience v-for="education in json.education" :item="education" :key="education.name" />
			</section>
		</div>
	</div>
</template>

<script>
import Header from './components/Header';
import Subheader from './components/Subheader';
import Ability from './components/Ability';
import Experience from './components/Experience';
import json from './assets/data.json';

export default {
	name: 'App',
	components: {
		Header,
		Subheader,
		Ability,
		Experience
	},
	data: () => {
		return {
			json: json
		};
	},
	computed: {
		abilities() {
			let skills = this.sortAbilities(json.skills);
			let tools = this.sortAbilities(json.tools);
			let languages = this.sortAbilities(json.languages);

			return {
				skills: this.splitAbilities(skills),
				tools: this.splitAbilities(tools),
				languages: this.splitAbilities(languages)
			};
		}
		/*skills() {
			return this.sortAbilities(json.skills);
		},
		firstHalfSkills() {
			let skills = [...this.skills];

			return skills.splice(0, Math.ceil(skills.length / 2));
		},
		otherHalfSkills() {
			let skills = [...this.skills];

			return skills.splice(Math.ceil(skills.length / 2));
		}*/
	},
	methods: {
		sortAbilities(abilities) {
			let items = [...abilities];

			items.sort(function (a, b) {
				if(b.stars == a.stars){
					if(a.name < b.name)
						return -1;

					if(a.name > b.name)
						return 1;

					return 0;
				}

				return b.stars - a.stars;
			});

			return items;
		},
		splitAbilities(abilities) {
			let items = [...abilities];

			return {
				first: items.splice(0, Math.ceil(items.length / 2)),
				second: items
			}
		}
	}
}
</script>

<style lang="scss">
body {
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
}
.socials {
	a {
		width: 35px;
		height: 35px;

		.fa {
			line-height: 32px;
			font-size: 12px;
		}
	}
}

.page-break,
section {
	page-break-after: always;
}
@media print {
	.print-margin-top {
		margin-top: 1.25rem;
	}
	.print-padding-top {
		padding-top: 1rem;
	}

	.print-hide {
		display: none;
		visibility: hidden;
	}
	.print-show {
		display: block !important;
	}
}
</style>
