/** ----------------------------------------
     Modules
 ---------------------------------------- */

const fs = require('fs');

/** ----------------------------------------
    Alias Setup
 ---------------------------------------- */

const alias = require('./../../src/config/alias.config');

/** ----------------------------------------
    Multi Replace
 ---------------------------------------- */

const multiReplace = (string, array) => {
    let data = string;

    array.forEach(alias => {
        const find = alias.name;
        const replaceFn = new RegExp(find, 'g');
        data = data.replace(replaceFn, alias.replace);
    });

    return data;
}

/** ----------------------------------------
     Inject Exportable Class
 ---------------------------------------- */

class ReplaceFunctions {
    static execute(process) {
        const output = process.options.output;
        const file = `dist/${ output.filename }`;

        fs.readFile(file, 'utf8', (error, data) => {
            if (error) throw error;

            const result = multiReplace(data, alias);

            fs.writeFile(file, result, 'utf8', error => {
                if (error) throw error;
            });
        });
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tap('ReplaceFunctions', () => ReplaceFunctions.execute(compiler));
    }
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

module.exports = ReplaceFunctions;