import { IsNotEmpty} from "class-validator";

export class UpdatePostDto {
  @IsNotEmpty()
  id: number
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
