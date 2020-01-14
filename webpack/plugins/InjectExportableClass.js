/** ----------------------------------------
     Modules
 ---------------------------------------- */

const fs = require('fs');

/** ----------------------------------------
     Inject Exportable Class
 ---------------------------------------- */

class InjectExportableClass {
    constructor(file) {
        this._file = file;
    }

    static execute(process) {
        const output = process.options.output;

        fs.appendFile(`dist/${ output.filename }`, `module.exports=${ output.library };`, error => {
            if(error) throw error;
            console.log(`Injected module export to build: ${ output.filename }!`);
        });
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tap('InjectExportableClass', () => InjectExportableClass.execute(compiler));
    }
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

module.exports = InjectExportableClass;