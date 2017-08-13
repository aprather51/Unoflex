module.exports = {

    "port": 3000,
    "files": [ "./docs/**/*.{html,htm,css,js}" ],
    "server": { 
      "baseDir": "./docs" 
    },
    ghostMode: {
        links: true,
        forms: true,
        scroll: true
    }
};

