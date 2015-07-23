module.exports = function(grunt){
	// Load our tasks
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");

	// Task Configuration
	var taskConfig = {
		pkg: grunt.file.readJSON("package.json"),
		watch:{
			files: ["index.html", "css/theme/**/*.scss"],
			tasks: ["sass"],
			options:{
				livereload: true
			}
		},
		sass:{
			options:{
				style: "compressed"
			},
			dist:{
				files:{
					"css/theme/wagnasty.css": "css/theme/source/wagnasty.scss"
				}
			}
		}
	};

	// Initialize configuration
	grunt.initConfig(taskConfig);

	// Register the default task
	grunt.registerTask("default", ["sass", "watch"]);
};