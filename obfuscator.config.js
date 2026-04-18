import JavaScriptObfuscator from 'javascript-obfuscator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const obfuscatorConfig = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  debugProtection: true,
  debugProtectionInterval: 1000,
  disableConsoleOutput: true,
  domainLock: [],
  domainLockThreshold: 1,
  forceCompactStr: true,
  identifierNamesCache: null,
  identifierNamesGenerator: 'hexadecimal',
  identifiersPrefix: '_0x',
  ignoreImports: false,
  inputFileName: '',
  log: false,
  numbersToExpressions: true,
  optionsPreset: 'high-obfuscation',
  outputFileName: '',
  renameGlobals: true,
  renameProperties: true,
  renamePropertiesMode: 'safe',
  reservedNames: [],
  reservedStrings: [],
  rotateStringArray: true,
  seed: Math.random(),
  selfDefending: true,
  shuffleStringArray: true,
  sourceMapBaseUrl: '',
  sourceMapFileName: '',
  sourceMapMode: 'inline',
  sourceMapSeparate: false,
  splitStrings: true,
  splitStringsChunkLength: 2,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayCallsTransformThreshold: 1,
  stringArrayEncoding: ['base64'],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayThreshold: 1,
  stringsConstantThreshold: 1,
  transformObjectKeys: true,
  unicodeEscapeSequence: true
};

function encryptString(str) {
  let encrypted = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) ^ (i % 256);
    encrypted += String.fromCharCode(charCode);
  }
  return Buffer.from(encrypted).toString('base64');
}

function obfuscateFiles() {
  const distPath = path.join(__dirname, 'dist');
  const assetsPath = path.join(distPath, 'assets');
  
  if (!fs.existsSync(assetsPath)) {
    console.error('Dist folder not found. Run "npm run build" first.');
    process.exit(1);
  }

  const jsFiles = fs.readdirSync(assetsPath).filter(file => file.endsWith('.js'));

  console.log('🔐 Starting code obfuscation...');
  console.log(`Found ${jsFiles.length} JS files to obfuscate\n`);

  jsFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const originalCode = fs.readFileSync(filePath, 'utf-8');
    
    console.log(`Obfuscating: ${file}`);
    
    const obfuscationResult = JavaScriptObfuscator.obfuscate(originalCode, {
      ...obfuscatorConfig,
      inputFileName: file
    });

    fs.writeFileSync(filePath, obfuscationResult.getObfuscatedCode());
    console.log(`✓ ${file} obfuscated (${(originalCode.length / 1024).toFixed(1)}KB → ${(obfuscationResult.getObfuscatedCode().length / 1024).toFixed(1)}KB)\n`);
  });

  console.log('🔒 All files obfuscated successfully!');
  console.log('\nObfuscation features applied:');
  console.log('  • String array encoding (base64)');
  console.log('  • Control flow flattening');
  console.log('  • Dead code injection');
  console.log('  • Variable renaming');
  console.log('  • Property renaming');
  console.log('  • Self-defending code');
  console.log('  • Console output disabled');
  console.log('  • Debug protection');
  console.log('  • String splitting');
  console.log('\n⚠️  Your source code is now heavily protected!');
}

obfuscateFiles();
