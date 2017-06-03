## shintech-info

### Synopsis

Get info about running NodeJS app.

### Usage 

    import {getAppInfo as info} from 'shintech-info'
    
    const options = {
      port: 8000,
      logger: winston
    }
    
    info(options)
    
    // Start your app with an argument where your package.json resides.
    
    ROOT_DIR=/home/user/backbone_postgres_seed npm start 
    