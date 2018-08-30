# ASP.NET Core Decoupled Demo

A very quick and dirty demonstration showing how localized strings can be toggled directly in the UI using Javascript in a decoupled fashion.

## About

This simple PoC demonstrates how to get around some of the limitations in classic ASP.Net Web Forms when implementing modern, semantic, seo compliant and accessible websites. The approach is not new and simply decouples the front and back ends so that they communicate via an API. 

In this demonstration project the front-end pages are served from the wwwroot folder under IIS. However, using this approach there is no reason that the pages cannot be deployed on a remote static server running Nginx, Node, Ruby, AWS S3, etc. This forces the .NET Core back-end into a strongly typed, robust and scalable API-only application.

While the demo shows how language/resource strings could be managed at the client level the principals can be applied to any aspect of the workflow of a modern web application.

Note that using Javascript to modify the locale content is fast and flicker free but may impact SEO value for all but the default locale. If SEO for all languages is required it would be preferrable to render separate language specific pages. While Google does a great job of crawling Javascript enabled sites no other search engines have this capability at the time of this writing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

* A contemporary development machine running a recent and stable version of Linux, Windows or OSX
* .Net Core 2.1.401
* A good code editor like Visual Studio Code or Visual Studio Professional

### Installing

1. Clone the repository `git clone repo`
2. Change to the cloned folder `cd`
3. Open up your code editor, e.g. `code .`
4. Compile and run the application , e.g. `F5`
5. Navigate to https://localhost:5001 in your brower. It has been barely tested in Google Chrome Version 68.0.3440.106 (Official Build) (64-bit).
6. Observe there are two pages, home and about. Toggling language on the home page relies upon the built in JSON object where as the about page uses an API call to fetch the localisation data.

## Running the tests

There are no tests in this PoC

## Deployment

This project is not intended to be deployed

## Built With

* [Coffee](https://en.wikipedia.org/wiki/Coffee): A good source of [C8H10N4O2](https://pubchem.ncbi.nlm.nih.gov/compound/caffeine)
* [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md)
* [Ubuntu 18.04](https://www.ubuntu.com/desktop/developers)
* [Visual Studio Code v1.26.1](https://code.visualstudio.com/)
* [.NET Core 2.1.401](https://www.microsoft.com/net/download)

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Troy Forster** - *Initial work* - [tforster](https://github.com/tforster)

## License

MIT
