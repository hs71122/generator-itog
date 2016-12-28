var Generator = require('yeoman-generator');
var fs = require('fs');
var generatorType;
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        generatorType = args[0];
    }
    runner() {
        if (generatorType != null) {
            switch (generatorType) {
                case 'page':
                    console.log('Page Generator');
                    //this._makePages();
                    this.prompt([{
                        type: 'input',
                        name: 'pageName',
                        message: 'Page Name'
                    },{
                        type: 'input',
                        name: 'pagePath',
                        message: 'Page path',
                        default: this.contextRoot + '\\src\\pages'
                    }, {
                        type: 'confirm',
                        name: 'isNeedScss',
                        message: 'Would you like to Generator scss file '
                    }]).then((answers) => {
                        this._makePages(answers.pageName,answers.pagePath,answers.isNeedScss);
                    });
                    break;
                case 'service':
                    console.log('Service Generator');
                    //this._makePages();
                    this.prompt([{
                        type: 'input',
                        name: 'serviceName',
                        message: 'Service Name'
                    }, {
                        type: 'input',
                        name: 'servicePath',
                        message: 'Service Path',
                        default: this.contextRoot + '\\src\\service'
                    }]).then((answers) => {
                        this._makeService(answers.serviceName, answers.servicePath);
                    });
                    break;
            }
        } else {
            console.error('useage : <service | page>');
        }

    }
    _makePages(pageName,pagePath,needScss) {
        var revertedPageName = this._revertCamelCase(pageName);
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath(pagePath + '\\' + pageName + '\\' + revertedPageName + '.page.html'), {
                title: pageName,
                body: pageName
            }
        );
        if (needScss) {
            this.fs.copyTpl(
                this.templatePath('index.scss'),
                this.destinationPath(pagePath + '\\' + pageName + '/' + revertedPageName + '.page.scss'), {
                    parentClass: 'page-' + revertedPageName
                }
            );
        }
        this.fs.copyTpl(
            this.templatePath('index.ts'),
            this.destinationPath(pagePath + '\\' + pageName + '/' + revertedPageName + '.page.ts'), {
                selector: 'page-' + revertedPageName,
                tamplate: revertedPageName + '.page.html',
                className: this._capitalizeFirstLetter(pageName + 'Page')
            }
        );
    }

    _makeService(serviceName, servicePath) {
        var revertedServiceName = this._revertCamelCase(serviceName);
        this.fs.copyTpl(
            this.templatePath('service.ts'),
            this.destinationPath(servicePath + '\\' + revertedServiceName + '.service.ts'), {
                className: this._capitalizeFirstLetter(serviceName + 'Service')
            }
        );
    }

    _revertCamelCase(st) {
        return st.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    _capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};
