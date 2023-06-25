import bcrypt from "bcryptjs";

class BcrytUtils {
  public async convertPassword(password: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(8);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (e: any) {
      throw new Error("Error ao converter a senha:" + e.message);
    }

    return "";
  }
}

export default new BcrytUtils();
