import { json } from "node:stream/consumers";
import { emailTemplate } from "../../src/js-foundation/01-template";


describe('js-foundation/01-template.ts', () => {

  test('emailTemplate should contain a greeting', () => {

    expect(emailTemplate).toContain('Hi, ');
  });

  test('emailTemplate should contain {{name}} and {{orderId}}', () => {

    expect(emailTemplate).toMatch(/{{name}}/); // ambas opciones son validas
    expect(emailTemplate).toMatch(/{{orderId}}/);

    expect(emailTemplate).toContain('{{name}}'); // ambas opciones son validas
    expect(emailTemplate).toContain('{{orderId}}');

  });

});
