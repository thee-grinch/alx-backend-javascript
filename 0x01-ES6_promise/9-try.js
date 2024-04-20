export default function guardrail(mathFunction) {
  try {
    return [mathFunction(), 'Guardrail was processed'];
  } catch (e) {
    return [`${e}`, 'Guardrail was processed'];
  }
}
