/** ----------------------------------------
     Banner
 ---------------------------------------- */

const banner = env => {
    const package = `${ env.npm_package_name } (${ env.npm_package_version }) by ${ env.npm_package_author_name }\n`;
    const desc = `${ env.npm_package_description }\n`;
    const licence = `This source code is licensed under the ${ env.npm_package_license } license found in the GitHub repository (${ env.npm_package_repository_url })`;
    return [package, desc, licence].join('');
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

module.exports = banner;