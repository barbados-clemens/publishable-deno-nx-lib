import { sampleDenoPublishableLib } from './sample-deno-publishable-lib.ts';
import { assertEquals } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('should return "sample-deno-publishable-lib"', () => {
  assertEquals(sampleDenoPublishableLib(), 'sample-deno-publishable-lib');
});
