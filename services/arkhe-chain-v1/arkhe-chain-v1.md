# ARKHE-chain-v1

**ARKHE Working Group · Marco A. Rojas · Toluca, MX · 25 Oct 2026**
**Category:** Informational · **License:** CC0 1.0 (public domain)

> *Very little of what is here is firm and reactions are expected.*

---

## 1. Motivation

The internet has no owner because its protocols are public. ARKHE ZERO inherits that principle: the format of a chain must be public, the key that signs it must not.

This document defines the smallest possible format for an append-only chain of SHA-256 hashes, signed with a detached GPG signature. **Any party can create a chain, sign it with their own key, and have it verified by any compliant verifier without asking permission from the author of this memo.**

---

## 2. Format

A chain is a file with one JSON object per line, UTF-8 encoded, LF line endings. The file SHOULD be called `chain.log`. Its detached, ASCII-armored GPG signature lives alongside as `chain.log.asc`.

### Required fields

| Field | Type | Description |
|-------|------|-------------|
| `v` | int | Format version. MUST be `1`. |
| `seq` | int | Sequence number. Starts at `1`, increments by `1`. |
| `sha256` | string | 64 lowercase hex. SHA-256 of the payload. |
| `prev_hash` | string | 64 lowercase hex. Previous entry's `chain_hash`. |
| `chain_hash` | string | 64 lowercase hex. `sha256(prev_hash \|\| sha256)`. |
| `ts` | string | ISO 8601 UTC timestamp. |

The first line is the **genesis entry**. Its `prev_hash` MUST be 64 zeros (`"0000…0000"`).

### Hash computation

chain_hash = sha256_hex(prev_hash || sha256)

Where `||` is **string concatenation** of the two 64-char lowercase hex strings, and `sha256_hex(x)` is the lowercase hex digest of the UTF-8 encoding of `x`.

---

## 3. Optional Fields (The Spare Bits)

The following fields MAY appear. **Verifiers MUST ignore fields they do not understand**, except fields beginning with `x-`, which MUST always be ignored (reserved for experimental use).

| Field | Type | Purpose |
|-------|------|---------|
| `id` | string | Opaque identifier chosen by issuer. |
| `lead_id` | string | Deprecated alias for `id`. |
| `payload_type` | string | MIME or custom type of the payload. |
| `issuer_key` | string | GPG fingerprint of the chain signer. |
| `prev_chain` | string | 64 hex. Parent chain's last `chain_hash`. |
| `sello_file` | string | Implementation hint: payload filename. |
| `sig_file` | string | Implementation hint: signature filename. |
| `x-*` | any | Experimental. Ignored by all verifiers. |

---

## 4. Verification

A verifier MUST, in order:

**a.** Verify the detached GPG signature of `chain.log` against `chain.log.asc`.

**b.** Parse each line as JSON; abort on any parse error.

**c.** For each entry `E` at position `i` (1-based):
- assert `E.v == 1`
- assert `E.seq == i`
- assert `len(E.sha256) == 64` and `len(E.prev_hash) == 64`
- assert `E.chain_hash == sha256_hex(E.prev_hash || E.sha256)`
- assert `E.prev_hash == previous.chain_hash`, or 64 zeros if `i == 1`

**d.** Optionally, for each entry, fetch the payload, hash it, and assert that hash equals `E.sha256`.

A chain that passes **(a)–(c)** is **chain-valid**.
A chain that also passes **(d)** is **payload-valid**.

The distinction matters: *a chain can be signed with a valid key while the payload has been withheld.*

---

## 5. Multiple Chains

There is no global registry. Each chain is a file. Each chain is signed by its own key. A verifier accepts any chain that passes section 4. Two chains MAY reference each other via `prev_chain`, but this is optional.

**The format is the protocol. The key is not.**

---

## 6. Open Questions

1. Should `chain_hash` include `ts`? This memo proposes it should **not**, so a verifier can recompute the chain without trusting any timestamp.
2. How should a chain signal that it has been superseded? `prev_chain` is proposed but not fully defined.
3. Should the file name be canonical? This memo proposes `chain.log` but accepts anything ending in `.log`.
4. Per-line signatures vs file-level signature? This memo proposes **file-level only**, because per-line signing is expensive and does not add security beyond what the chain itself provides.

---

## 7. Security Considerations

The format only guarantees **integrity** and **append-only-ness**. It does not guarantee that the payload exists, that the issuer is who they claim to be, or that the timestamp reflects reality. Those are matters of **key distribution and external trust**, not of the format.

---

## 8. License

This document is released under **CC0 1.0 Universal (public domain)**.
The format belongs to whoever uses it.

---

**Author's Address**
Marco Antonio Rojas Valdovinos · Toluca, MX
marco.a.rojas.v@hotmail.com
GPG: `0B903A7613F4D71B93C12EBE89EEB1D1177BE286`

*[ End of ARKHE-chain-v1 · very little of what is here is firm ]*


---

## 9. Manifest (optional)

An issuer MAY publish a `manifest.json` alongside `chain.log` with declared algorithms and issuer metadata. If present, it MUST be signed as `manifest.json.asc`. Verifiers that do not understand `manifest.json` MUST ignore it.

Required fields in `manifest.json`:
- `v` (string): manifest version, `"1.0"`.
- `alg.hash` (string): hash algorithm, e.g. `"sha256"`.
- `alg.signature` (string): signature algorithm, e.g. `"gpg-rsa4096"`.
- `issuer.name` (string): issuer's display name.
- `issuer.gpg_fingerprint` (string): 40-hex fingerprint.
- `chain.filename` (string): chain file name, default `"chain.log"`.
- `chain.spec_version` (string): e.g. `"ARKHE-chain-v1"`.

This allows future algorithm agility without breaking the v1 chain format.
