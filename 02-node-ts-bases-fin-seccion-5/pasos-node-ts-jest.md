# Pasos para configurar Jest con TypeScript, en Node 

Documentación [oficial sobre Jest](https://jestjs.io/docs/getting-started)


1. Instalaciones de desarrollo (super test es útil para probar Express)
```
npm install -D jest @types/jest ts-jest supertest
```

2. Crear archivo de configuración de Jest
```
npx jest --init
```

3. En el archivo **jest.config.js** configurar
```
preset: 'ts-jest',
testEnvironment: "jest-environment-node",

// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
// setupFiles: ['dotenv/config'],
```

4. Crear scripts en el **package.json**
```
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```

Más adelante pueda que vean este error:
![alt text](/src/img/image.png)

```
{
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts","**/*.test.ts"],
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

```
Para que quede así:
![alt text](/src/img/image-1.png)

O uno similar en el que diga que el archivo de jest.config.ts está fuera del rootDir de TypeScript Config.

Lo cual está bien, y es normal, ya que usamos TS-Jest, no hace falta transpilar nada de Jest con TypeScript, sin embargo el error es molesto, y podemos añadir esta configuración justo antes del compilerOptions (o después del mismo, da igual)

Si no les aparece el error, no hay problema, sigan adelante, y si les aparece el error, tampoco es problema, lo explico al final de esta sección.