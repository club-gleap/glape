export async function saltAndHashPassword(password: string): Promise<string> {
    // ※実運用時はランダムなsaltを生成し、安全に管理してください
    const salt = "my-fixed-salt";
    const text = password + salt;
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    // Web Crypto APIを使用してSHA-256のハッシュ値を生成
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // バイト列を16進数の文字列に変換
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }